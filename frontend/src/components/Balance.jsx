export const Balance = ({ value }) => {
    const formattedBalance = value.toFixed(2);
    return (
        <div className="flex items-center bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg shadow-lg text-white">
            <div className="font-bold text-lg">Your balance</div>
            <div className="font-semibold ml-4 text-lg">Rs {formattedBalance}</div>
        </div>
    );
};
