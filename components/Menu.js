import MenuItem from "../components/MenuItem";

const Menu = (props) => {
    return(
        <header className="mt-6 sm:mt-10">
            <nav>
                <ul className="flex justify-center gap-x-6 whitespace-nowrap flex-wrap">
                    {props.items.map((item, index) => {
                        return <MenuItem key={index} href={item.href}>{item.name}</MenuItem>
                    })}
                </ul>
            </nav>
        </header>
    );
};

export default Menu;

