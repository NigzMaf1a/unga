interface RibzProps{
    children: React.ReactNode;
}

export default function Ribz({children}:RibzProps){

    function ribStyle():string{
        const bg = "bg-green-700";
        const dimensions = 'w-full h-1/2 mx-1';

        return `${dimensions} ${bg}`;
    }

    return (
        <div className={ribStyle()}>
            {children}
        </div>
    );
}