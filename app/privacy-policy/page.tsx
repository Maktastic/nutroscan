// app/privacy-policy/page.tsx
export const metadata = {
    title: 'Privacy Policy | Nutroscan',
    description: 'Learn more about how Nutroscan handles your personal information.',
};

export default function PrivacyPolicy() {
    return (
        <div className="h-screen w-full bg-stone-50 px-4 py-8 text-black">
            <div className="container mx-auto">

                <h1 className="text-3xl text-emerald-600 font-bold mb-6">Privacy Policy</h1>
                <p className="mb-4">
                    Welcome to Nutroscan's Privacy Policy. This policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, and interact with our content.
                </p>

                <h2 className="text-2xl text-emerald-600 font-bold mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                    We may collect personal data such as your name, email address, phone number, and health-related information when you sign up, use our services, or communicate with us.
                </p>

                <h2 className="text-2xl text-emerald-600 font-bold mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">
                    The personal information we collect is used for the following purposes:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>To provide you with personalized meal plans based on your health condition.</li>
                    <li>To improve the functionality of our website and services.</li>
                    <li>To communicate with you regarding your use of our services.</li>
                    <li>To comply with legal obligations and protect the security of our services.</li>
                </ul>

                <h2 className="text-2xl text-emerald-600 font-bold mb-4">3. Sharing Your Information</h2>
                <p className="mb-4">
                    We do not sell or share your personal data with third parties for their own marketing purposes. We may share your information with trusted service providers to help us deliver our services.
                </p>

                <h2 className="text-2xl text-emerald-600 font-bold mb-4">4. Security of Your Information</h2>
                <p className="mb-4">
                    We take reasonable steps to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no online service is 100% secure, and we cannot guarantee the absolute security of your information.
                </p>

                <h2 className="text-2xl text-emerald-600 font-bold mb-4">5. Your Data Rights</h2>
                <p className="mb-4">
                    Depending on your location, you may have the right to access, update, or delete the personal data we hold about you. You can exercise these rights by contacting us at <a href="mailto:info@nutroscan.com" className="text-blue-600">info@nutroscan.com</a>.
                </p>

                <h2 className="text-2xl text-emerald-600 font-bold mb-4">6. Changes to This Privacy Policy</h2>
                <p className="mb-4">
                    We may update this Privacy Policy from time to time. When we do, we will notify you by updating the date at the top of this page and, if significant changes occur, providing a prominent notice on our website.
                </p>

                <h2 className="text-2xl text-emerald-600 font-bold mb-4">7. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions or concerns about this Privacy Policy or our practices, you can contact us at <a href="mailto:info@nutroscan.com" className="text-blue-600">info@nutroscan.com</a>.
                </p>

                <p className="mt-8">
                    Last updated: <strong>September 2024</strong>
                </p>

            </div>

        </div>
    );
}  