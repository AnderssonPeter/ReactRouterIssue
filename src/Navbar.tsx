interface NavbarProperties {
    username: string
}

export default function Navbar({ username }: NavbarProperties) {
    return (
        <div>
            Navbar
            <div>
                Username: {username}
            </div>
        </div>
    );
}