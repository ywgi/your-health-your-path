import { useState } from 'react';

const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('https://formspree.io/f/xqaeyngg', {
                method: 'POST',
                body: new FormData(e.currentTarget),
                headers: {
                    Accept: 'application/json'
                }
            });

            if (!response.ok) throw new Error('Submission failed');

            setStatus('submitted');
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4 sm:p-6">
            {status === 'submitted' ? (
                <div className="text-center">
                    <p className="text-green-600 mb-4">Thank you for your message! We'll get back to you soon.</p>
                    <button 
                        onClick={() => setStatus('idle')}
                        className="text-gray-700 hover:text-orange-500 text-sm sm:text-base"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            required
                            className="w-full p-2 border border-gray-300 focus:border-orange-500 focus:outline-none text-sm sm:text-base"
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            required
                            className="w-full p-2 border border-gray-300 focus:border-orange-500 focus:outline-none text-sm sm:text-base"
                        />
                    </div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        className="w-full p-2 border border-gray-300 focus:border-orange-500 focus:outline-none text-sm sm:text-base"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full p-2 border border-gray-300 focus:border-orange-500 focus:outline-none text-sm sm:text-base"
                    />
                    <textarea
                        name="message"
                        placeholder="Graag schrijf een bericht met: Wat voor afspraak wil je maken? In kort samenvatting beschrijf doelen en/of klachten. Graag geef twee of drie tijden die schikt voor jou te afspreken."
                        rows={6}
                        required
                        className="w-full p-2 border border-gray-300 focus:border-orange-500 focus:outline-none text-sm sm:text-base"
                    />
                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="inline-flex items-center text-gray-700 hover:text-orange-500 text-sm sm:text-base disabled:opacity-50"
                    >
                        {status === 'submitting' ? 'SENDING...' : 'SUBMIT'}
                        <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>
                    {status === 'error' && (
                        <p className="text-red-500 text-sm mt-2">
                            Oops! There was a problem sending your message. Please try again.
                        </p>
                    )}
                </form>
            )}
        </div>
    );
};

export default ContactForm;