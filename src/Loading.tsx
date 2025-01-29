interface LoadingProperties {
    name: string
}

export default function Loading({name}: LoadingProperties) {
    return (
        <div>{name} loading....</div>
    );
}