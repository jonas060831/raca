const photos = [
    {
        id: 1,
        title: 'Sound Republic',
        image_directory: "/media/images/photos/IMG_2786-min.jpg",
        width: 450,
        height: 1000
    },
    {
        id: 2,
        title: 'Party',
        image_directory: "/media/images/photos/IMG_2900-min.jpg",
        width: 744,
        height: 1000
    },
    {
        id: 3,
        title: 'Office',
        image_directory: "/media/images/photos/IMG_3934-min.jpg",
        width: 780,
        height: 585
    },
    {
        id: 4,
        title: 'Wedding',
        image_directory: "/media/images/photos/IMG_4140-min.jpg",
        width: 456,
        height: 1000
    },
    {
        id: 5,
        title: 'Wedding # 2',
        image_directory: "/media/images/photos/IMG_4141-min.jpg",
        width: 1000,
        height: 461
    },
    {
        id: 6,
        title: 'Wedding # 3',
        image_directory: "/media/images/photos/IMG_4143-min.jpg",
        width: 456,
        height: 1000
    },
    {
        id: 7,
        title: 'Wedding # 4',
        image_directory: "/media/images/photos/IMG_5340-min.jpg",
        width: 292,
        height: 390
    },
    {
        id: 8,
        title: 'Religious_Events',
        image_directory: "https://rentacoolair.s3.us-west-1.amazonaws.com/media/images/services/ReligiousEvents.png",
        width: 960,
        height: 720
    },
    {
        id: 9,
        title: 'Wedding # 6',
        image_directory: "/media/images/photos/IMG_2902-min.jpg",
        width: 744,
        height: 1000
    },
    {
        id: 10,
        title: 'Wedding # 7',
        image_directory: "https://rentacoolair.s3.us-west-1.amazonaws.com/media/images/services/Wedding.png",
        width: 1195,
        height: 735
    },
    {
        id: 11,
        title: 'Birthday',
        image_directory: "https://rentacoolair.s3.us-west-1.amazonaws.com/media/images/services/Birthday.png",
        width: 1024,
        height: 768
    },
    {
        id: 12,
        title: 'Fiesta',
        image_directory: "https://rentacoolair.s3.us-west-1.amazonaws.com/media/images/services/Fiesta.png",
        width: 1024,
        height: 768
    },
    {
        id: 13,
        title: 'Debut',
        image_directory: "https://rentacoolair.s3.us-west-1.amazonaws.com/media/images/services/Debut.png",
        width: 949,
        height: 649
    },
    {
        id: 14,
        title: 'Catering',
        image_directory: "https://rentacoolair.s3.us-west-1.amazonaws.com/media/images/services/Catering.png",
        width: 390,
        height: 292
    },
    {
        id: 15,
        title: 'Inauguration',
        image_directory: "https://rentacoolair.s3.us-west-1.amazonaws.com/media/images/services/Inauguration.png",
        width: 480,
        height: 360
    },
    {
        id: 16,
        title: 'Sport_Events',
        image_directory: "https://rentacoolair.s3.us-west-1.amazonaws.com/media/images/services/Sport_Events.png",
        width: 1024,
        height: 768
    },
    {
        id: 17,
        title: 'Clubhouse',
        image_directory: "https://rentacoolair.s3.us-west-1.amazonaws.com/media/images/services/Clubhouse.png",
        width: 1024,
        height: 768
    },
    {
        id: 18,
        title: 'Wedding # 5',
        image_directory: "https://rentacoolair.s3.us-west-1.amazonaws.com/media/images/services/Wedding.png",
        width: 1024,
        height: 768
    },
]


export const getPhotos = () => {
    return photos
}

export const getPhoto = (photoId) => {

    const photo = photos.find( photo => photoId == photo.id)

    return photo
}
