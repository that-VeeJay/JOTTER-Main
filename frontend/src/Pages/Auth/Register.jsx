import { Card, Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { sleep } from "../../Helpers/Helpers";

export default function Register() {
    const initialFields = { name: "", email: "", password: "", password_confirmation: "" };

    const [formData, setFormData] = useState(initialFields);
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/register", {
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
                setMessage(data.message);
                setFormData(initialFields);
                setErrors({});

                localStorage.setItem("token", data.token);
            }
        } catch (error) {
            console.error("Error during registration:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="p-8 w-[450px] space-y-6 ">
                <h1 className="text-2xl font-semibold">Create an account</h1>
                {message && <div className="dark:bg-green-950 dark:border dark:border-green-500 bg-green-500 text-white p-4 rounded-xl ">{message}</div>}
                <form onSubmit={handleFormSubmit} className="space-y-6">
                    <Input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} label="Name" />
                    {errors.name && <span className="text-red-500 text-sm font-medium">{errors.name[0]}</span>}

                    <Input type="text" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} label="Email" />
                    {errors.email && <span className="text-red-500 text-sm font-medium">{errors.email[0]}</span>}

                    <Input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} label="Password" />
                    {errors.password && <span className="text-red-500 text-sm font-medium">{errors.password[0]}</span>}

                    <Input type="password" value={formData.password_confirmation} onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })} label="Confirm Password" />

                    <Button type="submit" isLoading={loading} className="w-full p-6 bg-zinc-800 text-white">
                        {loading ? "Please wait..." : "Create an account"}
                    </Button>
                    <p>
                        Already have an account?{" "}
                        <Link to="/login" className="font-semibold">
                            Login
                        </Link>{" "}
                    </p>
                </form>
            </Card>
        </div>
    );
}
