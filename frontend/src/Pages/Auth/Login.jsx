import { Card, Input, Button } from "@nextui-org/react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

export default function Login() {
    const { setToken } = useContext(AppContext);
    const navigate = useNavigate();

    const initialFields = { email: "", password: "" };

    const [formData, setFormData] = useState(initialFields);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    async function handleFormSubmit(e) {
        e.preventDefault();
        setLoading(true);

        const res = await fetch("/api/login", {
            method: "post",
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        setLoading(false);

        if (data.errors) {
            setErrors(data.errors);
        } else {
            localStorage.setItem("token", data.token);
            setToken(data.token);
            navigate("/");
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="p-8 w-[450px] space-y-6 ">
                <h1 className="text-2xl font-semibold">Login</h1>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                    <Input type="text" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} label="Email" />
                    {errors.email && <span className="text-red-500 text-sm font-medium">{errors.email}</span>}

                    <Input type="text" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} label="Password" />
                    {errors.password && <span className="text-red-500 text-sm font-medium">{errors.password[0]}</span>}

                    <Button type="submit" isLoading={loading} className="w-full p-6 bg-zinc-800 text-white">
                        {loading ? "Please wait..." : "Login"}
                    </Button>
                    <p>
                        Do not have an account?{" "}
                        <Link to="/register" className="font-semibold">
                            Register
                        </Link>{" "}
                    </p>
                </form>
            </Card>
        </div>
    );
}
