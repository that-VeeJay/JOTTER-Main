import { Card, Input, Button } from "@nextui-org/react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

export default function Login() {
    const { setToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const initialFields = { email: "", password: "" };

    const [formData, setFormData] = useState(initialFields);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error(`Login failed with status ${res.status}`);
            }

            const data = await res.json();

            if (data.errors) {
                setErrors(data.errors);
            } else {
                localStorage.setItem("token", data.token);
                setToken(data.token);
                navigate("/");
            }
        } catch (error) {
            console.error("Error during login: ", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="p-8 w-[450px] space-y-6 ">
                <h1 className="text-2xl font-semibold">Login</h1>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                    <Input type="text" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} label="Email" />
                    {errors.email && <span className="text-red-500 text-sm font-medium">{errors.email}</span>}

                    <Input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} label="Password" />
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
