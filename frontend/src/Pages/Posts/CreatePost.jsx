import { useContext, useState } from "react";
import ReactQuill from "react-quill";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Autocomplete, AutocompleteItem, Button, Input } from "@nextui-org/react";
import { categories } from "@lib/Categories";
import { UploadIcon } from "@icons/UploadIcon";
import { MAX_FILE_SIZE, ACCEPTED_FILE_TYPE } from "@lib/Constants";
import { createPost } from "@services/postService";
import SectionTitle from "@components/SectionTitle";
import { AuthContext } from "@contexts/AuthProvider";
import "react-quill/dist/quill.bubble.css";

export default function CreatePost() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { token } = useContext(AuthContext);

    const initialValue = { title: "", category: "", image: null, body: "" };
    const [formData, setFormData] = useState(initialValue);
    const [formError, setFormError] = useState({});
    const [previewImage, setPreviewImage] = useState(null);

    const handleImageChange = (e) => {
        e.preventDefault();

        const file = e.target.files[0];

        if (file && ACCEPTED_FILE_TYPE.includes(file.type) && file.size <= MAX_FILE_SIZE) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewImage(e.target.result);
            };
            reader.readAsDataURL(file);
            setFormData({ ...formData, image: file });
        } else {
            alert("Invalid file type or size.");
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const file = e.dataTransfer.files[0];

        if (file && ACCEPTED_FILE_TYPE.includes(file.type) && file.size <= MAX_FILE_SIZE) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setPreviewImage(event.target.result);
            };
            reader.readAsDataURL(file);
            setFormData({ ...formData, image: file });
        } else {
            alert("Invalid file type or size.");
        }
    };

    const { mutate, isPending } = useMutation({
        mutationFn: () => createPost(formData, token),
        onSuccess: (response) => {
            if (response?.errors) {
                setFormError(response.errors);
            } else {
                queryClient.invalidateQueries({ queryKey: ["latest_posts"] });
                navigate("/");
            }
        },
        onError: () => {
            console.error("Post submission error:", error.message);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(formData);
    };

    return (
        <div className="container mx-auto max-h-screen">
            <div className="pt-5 xl:px-40">
                <SectionTitle showArrow={false} children="Create Post" />
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="md:col-span-3">
                            <Input type="text" label="Title" size="lg" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                            {formError.title && <p className="text-red-500 text-sm">{formError.title}</p>}
                        </div>

                        <div>
                            <Autocomplete size="lg" label="Category" value={formData.category} onSelectionChange={(key) => setFormData({ ...formData, category: key })} className="w-full">
                                {categories.map((category) => (
                                    <AutocompleteItem key={category.value} value={category.value}>
                                        {category.label}
                                    </AutocompleteItem>
                                ))}
                            </Autocomplete>
                            {formError.category && <p className="text-red-500 text-sm">{formError.category}</p>}
                        </div>
                    </div>

                    <div>
                        <div className="flex gap-5">
                            {/* Image Input */}
                            <div className="flex items-center justify-center w-1/2">
                                <label htmlFor="dropzone-file" onDragOver={(e) => e.preventDefault()} onDragEnter={(e) => e.preventDefault()} onDrop={handleDrop} className="flex flex-col items-center justify-center w-full h-52 border-2 border-zinc-300 border-dashed rounded-lg cursor-pointer bg-zinc-50  dark:bg-zinc-800 hover:bg-zinc-100 dark:border-zinc-600 dark:hover:border-zinc-500 dark:hover:bg-zinc-900">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <UploadIcon />
                                        <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
                                            <span className="font-semibold text-xs md:text-sm">Click to upload</span> or drag and drop
                                        </p>
                                        <p className="text-xs text-zinc-500 dark:text-zinc-400">PNG, JPG or JPEG (MAX: 5mb)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" name="image" accept="image/png, image/jpeg, image/jpg" onChange={handleImageChange} />
                                </label>
                            </div>

                            {/* Image Preview */}
                            <div className="flex items-center justify-center w-1/2">
                                <div className="flex flex-col items-center justify-center w-full h-52 border-2 border-zinc-300 border-dashed rounded-lg cursor-pointer bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:border-zinc-600 dark:hover:border-zinc-500 dark:hover:bg-zinc-900">
                                    {previewImage ? (
                                        <div className="relative w-full h-full">
                                            <p className="absolute bottom-1 left-1 bg-red-500 text-xs py-1 px-2 rounded-full bg-opacity-50 text-white">*not the actual ratio</p>
                                            <img src={previewImage} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                                        </div>
                                    ) : (
                                        <p className="text-sm text-zinc-500 dark:text-zinc-400">Image Preview</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        {formError.image && <p className="text-red-500 text-sm">{formError.image}</p>}
                    </div>
                    <div>
                        <p className="text-zinc-500">Share your story...</p>
                        <ReactQuill theme="bubble" value={formData.body} onChange={(value) => setFormData({ ...formData, body: value })} className="bg-zinc-100  h-96 rounded-2xl hover:bg-zinc-200 dark:bg-zinc-800  p-5" />
                        {formError.body && <p className="text-red-500 text-sm">{formError.body}</p>}
                    </div>
                    <div className="text-right space-x-5">
                        <Link to="/" className="text-sm text-zinc-400">
                            cancel
                        </Link>
                        <Button type="submit" isLoading={isPending} color="danger">
                            {isPending ? "Please wait..." : "Publish"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
