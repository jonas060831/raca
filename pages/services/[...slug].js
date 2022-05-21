import React, { useState, useEffect }  from 'react'
import { useRouter } from 'next/router'
import { addDays, format } from 'date-fns'
import axios from 'axios'

//data
import { getService } from '../../datas/services'
import { getAreas, getAreaByName } from '../../datas/areas'

//components
import HeadSEO from '../../components/seo/HeadSEO'
import MultiStepInquiryForm from '../../components/services/MultiStepInquiryForm'

//styles
import styles from '../../styles/InquiryPage.module.css'

//helpers
import { objectToBase64String } from '../../helpers/objectToBase64String'
import { base64StringToJsonObject } from '../../helpers/base64StringToJsonObject'


const InquiryPage = () => {


  //multiple days
  const today = new Date();
  const yesterday = new Date()
  yesterday.setDate(today.getDate() - 1 )

  const tommorow = new Date()
  tommorow.setDate(today.getDate() + 1 )

  
  const disabledDays = [
      { from: new Date(1991, 8, 5), to: yesterday }
  ]

  const router = useRouter()
  const slug = router.query.slug
  const [step, setStep] = useState(1)
  const [message, setMessage] = useState("")
  const [selectedService, setSelectedService] = useState({ id: 0, name: "", thumbnail: ""})
  const [location, setLocationValue] = useState({ street1: "", street2: "", CityOrMunicipality: "", district: "" })
  const [unitCount, setUnitCount] = useState(1)
  const [contact, setContact] = useState({ name: '', phone: '', email: '' })
  const [sr, setSr] = useState('initial')
  const [sm, setSm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const [date, setDate] = useState({ isMultiple: false, single: { date: new Date(), start: '', end: '' }, multiple: { from: today, to: addDays(today, 2), start: '', end: '' } })
  const [range, setRange] = useState({ from: today, to: addDays(today, 2)})

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, 'PPP')}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
        </p>
      );
    }
  }
  const footer2 = new Date(date.single.date) === undefined ? (

    <p>You selected {format(new Date(date.single.date), 'PPP')}.</p>
  ) : (
    <p>Please pick a day.</p>
  );


  if (!slug) {
    return <p className="center">Loading...</p>
  }

  const serviceId = slug[0]
  const service = getService(serviceId)
  
  const areas = getAreas()

  const next = () => {
      setStep(step += 1)

      if (slug.length === 1) {
          //convert object to string
          const base64 = objectToBase64String(location)

          router.push(`/services/${serviceId}/${base64}`, undefined, { scroll: false })
      } else if (slug.length === 2) {

          //convert object to string
          const base64 = objectToBase64String(location)

          router.push(`/services/${serviceId}/${base64}/${unitCount}`, undefined, { scroll: false })
          
      } else if (slug.length === 3) {

        //convert object to string
        const base64 = objectToBase64String(location)

        const base64Date = objectToBase64String(date)

        router.push(`/services/${serviceId}/${base64}/${unitCount}/${base64Date}`, undefined, { scroll: false })
      } else if (slug.length === 4) {
          
        //convert object to string
        const base64 = objectToBase64String(location)

        setDate(state => ({
          ...state,
          multiple: { from: new Date(range.from), to: new Date(range.to), start: date.multiple.start, end: date.multiple.end }
        }))

        const base64Date = objectToBase64String(date)
        const base64Contact = objectToBase64String(contact)
        router.push(`/services/${serviceId}/${base64}/${unitCount}/${base64Date}/${base64Contact}`, undefined, { scroll: false })
      } else if (slug.length === 5) {

        //convert object to string
        const base64 = objectToBase64String(location)

        setDate(state => ({
          ...state,
          multiple: { from: new Date(range.from), to: new Date(range.to), start: date.multiple.start, end: date.multiple.end }
        }))

        const base64Date = objectToBase64String(date)
        const base64Contact = objectToBase64String(contact)

        generateMessage()

        router.push(`/services/${serviceId}/${base64}/${unitCount}/${base64Date}/${base64Contact}/finish`, undefined, { scroll: false })

      }
  }


  const generateMessage = () => {

    const locationBase64String = slug[1]
    const newLocation = base64StringToJsonObject(locationBase64String)

    const unit = slug[2]

    const base64Date = slug[3]
    const newDate = base64StringToJsonObject(base64Date)

    const base64Contact = slug[4]
    const newContact = base64StringToJsonObject(base64Contact)

    //message
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const beginDate = new Date(newDate.multiple.from).toLocaleDateString("en-US", options)
    const endDate = new Date(newDate.multiple.to).toLocaleDateString("en-US", options)
    const selectedDate = new Date(date.single.date).toLocaleDateString("en-US", options)
    
    const renderDate = newDate.isMultiple === true ? `between the dates of ${beginDate} until ${endDate}. ` : `on ${selectedDate} `
    
    //const creator = process.env.NEXT_PUBLIC_CREATOR_NAME

    const updatedMessage = `Hi Rent A Cool Air Team,\n\n`+
                           `\xa0 \xa0 My Name is ${newContact.name} I would like to inquire about your ${service.name} package. I need ${unit} air cooler ` +
                           `${renderDate}` +
                           `at this location:\n${newLocation.street1} ${newLocation.street2} ${newLocation.CityOrMunicipality} ${newLocation.district} District\n` +
                           `\nPlease Contact me at: \n`+
                           `${newContact.phone}\n${newContact.email}\n\n`+
                           `Thank You and Have a Great Day!`

    setMessage(updatedMessage)
  }


  const previous = () => {

    setStep(step -= 1)
  }

  const setIsMultipleDay = (isItMultiple) => {

    setDate( state => ({
      ...state,
       isMultiple: isItMultiple 
    }))
  }

  const onRadioBlur = () => {
    //convert object to string
    const base64 = objectToBase64String(location)
    const base64Date = objectToBase64String(date)

    router.push(`/services/${serviceId}/${base64}/${unitCount}/${base64Date}`, undefined, { scroll: false })
  }

  const handleMultipleDateChange = (updatedDate) => {
    
    setRange(updatedDate)

    if (updatedDate) {
      setDate(state => ({
        ...state,
        multiple: { from: updatedDate.from, to: updatedDate.to, start: date.multiple.start, end: date.multiple.end }
      }))
    }
  }

  const handleDateChange = (updatedDate) => {

    setDate(state => ({
      ...state,
      single: { date: updatedDate, start: date.single.start, end: date.single.end }
    }))
  }

  const handleDayBlur = () => {

    const base64 = objectToBase64String(location)
    const base64Date = objectToBase64String(date)


    router.push(`/services/${serviceId}/${base64}/${unitCount}/${base64Date}`, undefined, { scroll: false })
  }
  const handleSelectedService = (service) => {
      const n = {
          service : { id: service.id, name: service.name, thumbnail: service.thumbnail }
      }

      //add values to selectedService
      setSelectedService(Object.assign(selectedService, n.service))
  }

  const handleLocationChange = (e) => {
      const { name, value } = e.target

      //add value to location
      const area = getAreaByName(value)
      const district = ""
      
      if (area !== undefined) {
          district = area.district
      }

      setLocationValue((prev) => ({
        ...prev,
        [name]: value,
        "district" : district
      }));
    }

  const onLocationValueChange = () => {


      const base64 = objectToBase64String(location)

      if (slug.length === 2) {
          router.push(`/services/${serviceId}/${base64}`, undefined, { scroll: false })
      } else if (slug.length === 3) {
          router.push(`/services/${serviceId}/${base64}/${unitCount}`, undefined, { scroll: false })
      } else if (slug.length === 4) {

          const base64Date = objectToBase64String(date)
          router.push(`/services/${serviceId}/${base64}/${unitCount}/${base64Date}`, undefined, { scroll: false })
      }

    }

    const handleContactChange = (e) => {
      const { name, value } = e.target


      setContact((prev) => ({
        ...prev,
        [name]: value
      }));
    }
const onContactValueChange = () => {
   
  const base64 = objectToBase64String(location)

      if (slug.length === 2) {
          router.push(`/services/${serviceId}/${base64}`, undefined, { scroll: false })
      } else if (slug.length === 3) {
          router.push(`/services/${serviceId}/${base64}/${unitCount}`, undefined, { scroll: false })
      } else if (slug.length === 4) {
          const base64Date = objectToBase64String(date)
          router.push(`/services/${serviceId}/${base64}/${unitCount}/${base64Date}`, undefined, { scroll: false })
      } else if (slug.length === 5) {
        const base64Date = objectToBase64String(date)
        const base64Contact = objectToBase64String(contact)

        router.push(`/services/${serviceId}/${base64}/${unitCount}/${base64Date}/${base64Contact}`, undefined, { scroll: false })
      }

}


  const increaseUnitCount = () => {
      
      if (unitCount >= 1) {
          setUnitCount(unitCount += 1)

          const base64 = objectToBase64String(location)
          

          if (slug.length <= 3) {
            router.push(`/services/${serviceId}/${base64}/${unitCount}`, undefined, { scroll: false })
          } else if (slug.length === 4) {
            const base64Date = objectToBase64String(date)
            router.push(`/services/${serviceId}/${base64}/${unitCount}/${base64Date}`, undefined, { scroll: false })
          } else if (slug.length === 5) {
            const base64Date = objectToBase64String(date)
            const base64Contact = objectToBase64String(contact)
            router.push(`/services/${serviceId}/${base64}/${unitCount}/${base64Date}/${base64Contact}`, undefined, { scroll: false })
          } else if (slug.length === 6) {
            const base64Date = objectToBase64String(date)
            const base64Contact = objectToBase64String(contact)
            router.push(`/services/${serviceId}/${base64}/${unitCount}/${base64Date}/${base64Contact}`, undefined, { scroll: false })
          }
          
      }
      
  }

  const decreaseUnitCount = () => {

      if (unitCount > 1) {
          setUnitCount(unitCount -= 1)


          const base64 = objectToBase64String(location)

          if (slug.length <= 3) {
            router.push(`/services/${serviceId}/${base64}/${unitCount}`, undefined, { scroll: false })
          } else if (slug.length === 4) {
            const base64Date = objectToBase64String(date)
            router.push(`/services/${serviceId}/${base64}/${unitCount}/${base64Date}`, undefined, { scroll: false })
          } else if (slug.length === 5) {
            const base64Date = objectToBase64String(date)
            const base64Contact = objectToBase64String(contact)
            router.push(`/services/${serviceId}/${base64}/${unitCount}/${base64Date}/${base64Contact}`, undefined, { scroll: false })
          } else if (slug.length === 6) {
            const base64Date = objectToBase64String(date)
            const base64Contact = objectToBase64String(contact)
            router.push(`/services/${serviceId}/${base64}/${unitCount}/${base64Date}/${base64Contact}`, undefined, { scroll: false })
          }

      }
  }

  const handleSubmitMessage = async (event) => {
    
    setIsLoading(true)
    
    event.preventDefault()

    setMessage(message)

    

    try {

      const response = await axios.post('/api/emailus',
      { 
        message: message, 
        url: slug,
        customerName: contact.name,
        customerEmail: contact.email
      })
      
      const { data } = response

        setSm(data.message)
        setMessage("Message Sent Succesfully")
        setSr("yes")
        setIsLoading(false)
        window.scrollTo(0,0)

    } catch (error) {
        setSm(error.response.data.message)
        setMessage(message)
        setSr("no")
        setIsLoading(false)
        window.scrollTo(0,0)
    }
  }

  return (
    <div>
        <HeadSEO
          TabTitle="Inquiry Form"
          title="Iwata Air Cooler for Rent"
          description="Inquiry Form"
        />

        <main>
            <div className={styles.container}>

                {/* add breadcrumbs */}

                <section className={styles.inquiryForm} >
                    <MultiStepInquiryForm
                        step={step}
                        slug={slug}
                        setStep={ setStep }
                        service={service}
                        nextStep={ () => next() }
                        prevStep={ () => previous() }
                        selectedService={ handleSelectedService }
                        location= { location }
                        handleLocationChange={ handleLocationChange }
                        setLocationValue= { setLocationValue }
                        onLocationValueChange = { onLocationValueChange }
                        areas={ areas }
                        unitCount={ unitCount }
                        increaseUnitCount={ increaseUnitCount }
                        decreaseUnitCount={ decreaseUnitCount }
                        setUnitCount={ setUnitCount}
                        date={ date }
                        setDate={ setDate }
                        today={ today }
                        range={ range }
                        setRange= { setRange }
                        disabledDays= { disabledDays }
                        footer={ footer }
                        //footer2={ footer2 }
                        setIsMultipleDay={ setIsMultipleDay }
                        onRadioBlur={ onRadioBlur }
                        handleMultipleDateChange={ handleMultipleDateChange }
                        handleDateChange={ handleDateChange }
                        handleDayBlur={ handleDayBlur }
                        contact={ contact }
                        setContact={ setContact }
                        handleContactChange={ handleContactChange }
                        onContactValueChange={ onContactValueChange }
                        handleSubmitMessage={ handleSubmitMessage }
                        message={ message }
                        setMessage={ setMessage }
                        sm={ sm }
                        sr={ sr }
                        setSr={ setSr }
                        isLoading={ isLoading }
                    />
                </section>
            </div>

        </main>

        
    </div>
  )
}

export default InquiryPage