import { Card, Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
    const initialFields = { name: "", email: "", password: "", password_confirmation: "" };

    const [formData, setFormData] = useState(initialFields);
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleFormSubmit(e) {
        e.preventDefault();
        setLoading(true);

        const res = await fetch("/api/register", {
            method: "post",
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        setLoading(false);

        if (data.errors) {
            setErrors(data.errors);
        } else {
            setMessage(data.message);
            setFormData(initialFields);
            setErrors({});

            localStorage.setItem("token", data.token);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="p-8 w-[450px] space-y-6 ">
                <h1 className="text-2xl font-semibold">Create an account</h1>
                {message && <div className="bg-green-700 text-white p-4 rounded-xl ">{message}</div>}
                <form onSubmit={handleFormSubmit} className="space-y-6">
                    <Input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} label="Name" />
                    {errors.name && <span className="text-red-500 text-sm font-medium">{errors.name[0]}</span>}

                    <Input type="text" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} label="Email" />
                    {errors.email && <span className="text-red-500 text-sm font-medium">{errors.email[0]}</span>}

                    <Input type="text" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} label="Password" />
                    {errors.password && <span className="text-red-500 text-sm font-medium">{errors.password[0]}</span>}

                    <Input type="text" value={formData.password_confirmation} onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })} label="Confirm Password" />

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
