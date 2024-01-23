export const MyAuthComponent = () => {
    const{
        currentUser,
        login,
        logout
    } = useFrappeAuth();
}

if (isLoading) return <div>Loading...</div>;

return (
    <div>
        <button onClick={() => login('administrator','admin')}>Login</button>
        <button onClick={logout}>Logout</button>
    </div>
)