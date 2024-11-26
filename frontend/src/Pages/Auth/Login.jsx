import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "@services/authService";
import { useMutation } from "@tanstack/react-query";
import { AuthContext } from "@contexts/AuthProvider";
import { Button, Card, Input } from "@nextui-org/react";

export default function Login() {
    const { setToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const initialFields = { email: "", password: "" };

    const [formData, setFormData] = useState(initialFields);
    const [errors, setErrors] = useState({});

    const { mutate, isPending } = useMutation({
        mutationFn: () => login(formData),
        onSuccess: (data) => {
            if (data.errors) {
                console.log(data.errors);
                setErrors(data.errors);
            } else {
                localStorage.setItem("token", data.token);
                setToken(data.token);
                navigate("/");
            }
        },
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        mutate(formData);
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

                    <Button type="submit" isLoading={isPending} className="w-full p-6 bg-zinc-800 text-white">
                        {isPending ? "Please wait..." : "Login"}
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
