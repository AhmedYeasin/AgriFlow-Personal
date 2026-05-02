"use client";

const FAQ = () => {


    return (
        <div className="m-10">
            <h1 className="text-2xl text-center p-4 bg-yellow-500 text-white font-bold rounded-xl mb-4">All about you love to know (FAQ)</h1>

            {/* beginning on account creation */}
            <h2 className="text-xl font-semibold mt-5">Getting Started with AgriFlow</h2>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="checkbox" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">How do I create an account?</div>
                <div className="collapse-content text-sm">Simply click the "Sign Up" button in the top right corner and follow the registration process.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="checkbox" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">How do I choose between Farmer, Buyer, or Delivery Partner roles?</div>
                <div className="collapse-content text-sm">For first time Sign-up you can find option to choose your preferred role during the registration process, or you can update your role later in your settings.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="checkbox" name="my-accordion-3" />
                <div className="collapse-title font-semibold">Is AgriFlow free to use?</div>
                <div className="collapse-content text-sm">Yes, AgriFlow is free to use for only normal users, but for role-based features, there might be monthly subscription fees.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="checkbox" name="my-accordion-3" />
                <div className="collapse-title font-semibold">How do I update my profile information?</div>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </div>

            {/* For Farmers */}
            <h2 className="text-xl font-semibold mt-5">For Farmers</h2>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="checkbox" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">How do I add products to the marketplace?</div>
                <div className="collapse-content text-sm">If you are varified as a farmer then you will have your own dashboard where you can list your products for sale.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="checkbox" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">What is the "Go Live" feature and how do I use it?</div>
                <div className="collapse-content text-sm">On this option you can make your products live and available for purchase.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="checkbox" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">How are payments processed when I sell crops?</div>
                <div className="collapse-content text-sm">Payments are processed through our secure payment gateway, and funds are transferred to your account within 3-5 business days.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="checkbox" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">Can I delete or update my product listings?</div>
                <div className="collapse-content text-sm">Yes, you can edit or remove your product listings at any time from your farmer dashboard. You should maintain proper guidelines.</div>
            </div>

            {/* for buyers */}
            <h2 className="text-xl font-semibold mt-5">For Buyers</h2>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="checkbox" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">How do I purchase products from the marketplace?</div>
                <div className="collapse-content text-sm">Browse the available products, add them to your cart, and proceed to checkout to complete your purchase.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="checkbox" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">What payment methods are accepted?</div>
                <div className="collapse-content text-sm">We accept all major credit cards, debit cards, and mobile wallets for secure transactions.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="checkbox" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">How do I participate in live bidding?</div>
                <div className="collapse-content text-sm">Live bidding allows you to bid on products in real-time. You can set your maximum bid and the system will automatically place bids on your behalf up to that amount.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="checkbox" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">Can I cancel or return an order?</div>
                <div className="collapse-content text-sm">You can cancel your order before it is shipped. Returns are subject to our return policy, which you can find in the "Help" section.</div>
            </div>

            {/* Artificial Intelligence Support */}
            <h2 className="text-xl font-semibold mt-5">Artificial Intelligence Support</h2>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="checkbox" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">What can the AI chatbot help me with?</div>
                <div className="collapse-content text-sm">The AI chatbot can assist you with product inquiries, order status updates, and general support questions.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="checkbox" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">Can the chatbot identify plant diseases?</div>
                <div className="collapse-content text-sm">This AI training enables the chatbot to recognize common plant diseases and provide initial diagnostic information. (Note: Our AI chatbot can mistake)</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="checkbox" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">In what languages does the chatbot support users?</div>
                <div className="collapse-content text-sm">Both English and Bangla you can chat with, but we prefer English for better solution.</div>
            </div>
        </div>
    );
};

export default FAQ;