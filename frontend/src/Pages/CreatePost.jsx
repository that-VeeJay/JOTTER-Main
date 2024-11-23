import { useState } from "react";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";
import { Autocomplete, AutocompleteItem, Button, Input } from "@nextui-org/react";
import { UploadIcon } from "../Icons/UploadIcon";
import SectionTitle from "../Components/SectionTitle";
import "react-quill/dist/quill.bubble.css";

export default function CreatePost() {
    const [previewImage, setPreviewImage] = useState(null);

    const categories = [
        { label: "Travel", value: "travel" },
        { label: "Education", value: "education" },
        { label: "Food", value: "food" },
    ];

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setPreviewImage(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const preventDefault = (e) => e.preventDefault();

    return (
        <div className="container mx-auto max-h-screen">
            <div className="pt-5 xl:px-40">
                <SectionTitle showArrow={false} children="Create Post" />
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <Input type="text" label="Title" size="lg" className="md:col-span-3" />
                        <Autocomplete size="lg" label="Category" className="w-full">
                            {categories.map((category) => (
                                <AutocompleteItem key={category.value} value={category.value}>
                                    {category.label}
                                </AutocompleteItem>
                            ))}
                        </Autocomplete>
                    </div>

                    <div className="flex gap-5">
                        {/* Image Input */}
                        <div className="flex items-center justify-center w-1/2">
                            <label for="dropzone-file" onDragOver={preventDefault} onDragEnter={preventDefault} onDrop={handleDrop} className="flex flex-col items-center justify-center w-full h-52 border-2 border-zinc-300 border-dashed rounded-lg cursor-pointer bg-zinc-50  dark:bg-zinc-800 hover:bg-zinc-100 dark:border-zinc-600 dark:hover:border-zinc-500 dark:hover:bg-zinc-900">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <UploadIcon />
                                    <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
                                        <span className="font-semibold text-xs md:text-sm">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-400">PNG, JPG or JPEG</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" accept="image/png, image/jpeg, image/jpg" onChange={handleImageChange} />
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
                    <div>
                        <p className="text-zinc-500">Share your story...</p>
                        <ReactQuill theme="bubble" className="bg-zinc-100  h-96 rounded-2xl hover:bg-zinc-200 dark:bg-zinc-800  p-5" />
                    </div>
                    <div className="text-right space-x-5">
                        <Link to="/" className="text-sm text-zinc-400">
                            cancel
                        </Link>
                        <Button type="submit" color="danger">
                            Publish
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
