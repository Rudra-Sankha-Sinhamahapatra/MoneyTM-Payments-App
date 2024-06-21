export const Appbar = ({ letter }) => {
    return (
        <div className="shadow-lg h-16 flex justify-between items-center bg-gradient-to-r from-blue-600 to-purple-600 px-6">
            <div className="flex items-center text-white text-2xl font-bold">
                <span className="text-yellow-300 mr-2">MoneyTM</span> <span>Payments App</span>
            </div>
            <div className="flex items-center">
                <span className="text-white mr-4">Hello</span>
                <div className="rounded-full h-12 w-12 bg-yellow-300 flex items-center justify-center text-2xl text-blue-900 font-semibold">
                    {letter}
                </div>
            </div>
        </div>
    );
};
