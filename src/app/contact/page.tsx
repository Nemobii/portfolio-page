'use client';

import { useState } from "react";
import Layout from "../components/Layout";

export default function Page() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log('Form data:', formData);
        alert('Nachricht erfolgreich gesendet!');
    };

    return (
        <Layout>
            <div className="flex justify-center items-center min-h-screen p-10">
                <div className="flex flex-col md:flex-row bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
                    <div className="md:w-1/2 pr-8 mb-8 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4">Gefällt Ihnen, was Sie sehen?</h2>
                        <p className="text-lg leading-relaxed">
                            Wenn Sie eine Sitzung buchen oder sich über Preise erkundigen möchten, füllen Sie bitte das Formular aus. 
                            Ich werde Ihnen innerhalb von 24-48 Stunden antworten. 
                            <br /><br />
                            Ich freue mich darauf, mit Ihnen zu arbeiten.
                        </p>
                    </div>

                    <form 
                        onSubmit={handleSubmit} 
                        className="md:w-1/2"
                    >
                        <h1 className="text-2xl font-bold mb-6 text-center">Kontakt aufnehmen</h1>

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name und Vorname*</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Max Mustermann"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">E-Mail*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="max.mustermann@example.com"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Nachricht*</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Deine Nachricht..." 
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Telefonnummer (optional)</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="01234 567890"
                            />
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors"
                            >
                                Nachricht senden
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
