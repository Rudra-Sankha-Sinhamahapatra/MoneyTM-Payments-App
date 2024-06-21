export const Name = ({ name }) => {
    return (
        <div className="flex items-center text-2xl text-white mt-6">
            <span>Welcome</span>
            <span className="font-bold text-yellow-300 ml-2">{name}</span>
        </div>
    );
};
