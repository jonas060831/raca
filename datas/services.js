const services = [
    {
        id: 1,
        name: "Wedding",
        thumbnail: "https://rentacoolair.s3.us-west-1.amazonaws.com/media/images/services/Wedding.png"
    },
    {
        id: 2,
        name: "Birthday",
        thumbnail: "https://rentacoolair.s3.us-west-1.amazonaws.com/media/images/services/Birthday.png"
    },
    {
        id: 3,
        name: "Fiesta",
        thumbnail: "https://rentacoolair.s3.us-west-1.amazonaws.com/media/images/services/Fiesta.png"
    },
    {
        id: 4,
        name: "Debut",
        thumbnail: "https://rentacoolair.s3.us-west-1.amazonaws.com/media/images/services/Debut.png"
    },
    {
        id: 5,
        name: "Catering",
        thumbnail: "https://rentacoolair.s3.us-west-1.amazonaws.com/media/images/services/Catering.png"
    },
    {
        id: 6,
        name: "Office",
        thumbnail: "https://rentacoolair.s3.us-west-1.amazonaws.com/media/images/services/Office.png"
    },
    {
        id: 7,
        name: "Inauguration",
        thumbnail: "https://rentacoolair.s3.us-west-1.amazonaws.com/media/images/services/Inauguration.png"
    },
    {
        id: 8,
        name: "Sport Events",
        thumbnail: "https://rentacoolair.s3.us-west-1.amazonaws.com/media/images/services/Sport_Events.png"
    },
    {
        id: 9,
        name: "Clubhouse",
        thumbnail: "https://rentacoolair.s3.us-west-1.amazonaws.com/media/images/services/Clubhouse.png"
    },
    {
        id: 10,
        name: "Religious Events",
        thumbnail: "https://rentacoolair.s3.us-west-1.amazonaws.com/media/images/services/ReligiousEvents.png"
    }
]

export const getServices = () => {
    return services
}

export const getService = (serviceId) => {

    const service = services.find( service => serviceId == service.id)

    return service
}