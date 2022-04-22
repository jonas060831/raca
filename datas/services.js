const services = [
    {
        id: 1,
        name: "Wedding",
        thumbnail: "/media/images/services/images/Wedding.png"
    },
    {
        id: 2,
        name: "Birthday",
        thumbnail: "/media/images/services/images/Birthday.png"
    },
    {
        id: 3,
        name: "Fiesta",
        thumbnail: "/media/images/services/images/Fiesta.png"
    },
    {
        id: 4,
        name: "Debut",
        thumbnail: "/media/images/services/images/Debut.png"
    },
    {
        id: 5,
        name: "Catering",
        thumbnail: "/media/images/services/images/Catering.png"
    },
    {
        id: 6,
        name: "Office",
        thumbnail: "/media/images/services/images/Office.png"
    },
    {
        id: 7,
        name: "Inauguration",
        thumbnail: "/media/images/services/images/Inauguration.png"
    },
    {
        id: 8,
        name: "Sport Events",
        thumbnail: "/media/images/services/images/Sport_Events.png"
    },
    {
        id: 9,
        name: "Clubhouse",
        thumbnail: "/media/images/services/images/Clubhouse.png"
    },
    {
        id: 10,
        name: "Religious Events",
        thumbnail: "/media/images/services/images/Religious_Events.png"
    }
]

export const getServices = () => {
    return services
}

export const getService = (serviceId) => {

    const service = services.find( service => serviceId == service.id)

    return service
}