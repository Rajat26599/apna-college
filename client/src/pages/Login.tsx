export const LoginPage = () => {
    return (
        <>
            <form className="text-center flex flex-col gap-5 w-full sm:w-1/2 md:w-1/3 margin-auto absolute top-1/4 left-1/2 -translate-x-1/2">
                <h1 className="text-3xl">Login</h1>
                <input type="text" placeholder="Username" className="p-1 border-1 rounded-sm" />
                <input type="password" placeholder="Password" className="p-1 border-1 rounded-sm" />
                <button type="submit" className="bg-blue-500 text-white p-1 rounded-sm">Submit</button>
            </form>
        </>
    )
}