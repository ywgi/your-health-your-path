
const ContactForm: React.FC = () => {
    type FormEvent = React.FormEvent<HTMLFormElement>;

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
    };

    return (
        <div className="max-w-2xl mx-auto p-4 sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-2 border border-gray-300 focus:border-orange-500 focus:outline-none text-sm sm:text-base"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-2 border border-gray-300 focus:border-orange-500 focus:outline-none text-sm sm:text-base"
                />
                </div>
                <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 border border-gray-300 focus:border-orange-500 focus:outline-none text-sm sm:text-base"
                />
                <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 border border-gray-300 focus:border-orange-500 focus:outline-none text-sm sm:text-base"
                />
                <input
                type="text"
                placeholder="Where did you find us?"
                className="w-full p-2 border border-gray-300 focus:border-orange-500 focus:outline-none text-sm sm:text-base"
                />
                <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full p-2 border border-gray-300 focus:border-orange-500 focus:outline-none text-sm sm:text-base"
                />
                <button
                type="submit"
                className="inline-flex items-center text-gray-700 hover:text-orange-500 text-sm sm:text-base"
                >
                SUBMIT
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
            </form>
        </div>
    );
};

export default ContactForm;