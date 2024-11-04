
const people = [
    {
        name: 'Calvin Hawkins',
        email: 'calvin.hawkins@example.com',
        image:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }
]

function Profile() {
    return (
        <ul className="divide-y divide-gray-200 lg:mt-10 mt-6">
            {people.map((person) => (
                <li key={person.email} className="py-4 flex">
                    <img className="h-14 w-14 rounded-full object-cover" src={person.image} alt="" />
                    <div className="ml-3 my-3">
                        <p className="text-sm font-medium text-white">{person.name}</p>
                        <p className="text-sm text-white font-normal">{person.email}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Profile