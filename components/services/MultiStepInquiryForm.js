import React, { useCallback, useEffect } from 'react'
import { MapPin, Home, Flag, Plus, Minus, User, Phone, AtSign, Send, CheckCircle, AlertTriangle } from 'react-feather'


import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

//components
import StepForm from '../services/inquiry-form/StepForm'
import TextField from '../ui/TextField'
import TextField2 from '../ui/TextField2';
import CircularButton from '../../components/ui/CircularButton'
import TextArea from '../../components/ui/TextArea'

//styles
import styles from '../../styles/components/MultiStepInquiryForm.module.css'
import Select from '../ui/Select'

//helpers
import { base64StringToJsonObject } from '../../helpers/base64StringToJsonObject';

const MultiStepInquiryForm = (props) => {
  const { setStep, slug, step, service, nextStep, prevStep, selectedService, setLocationValue, handleLocationChange, location, areas, onLocationValueChange, unitCount, setUnitCount, increaseUnitCount, decreaseUnitCount, date, setDate, today, range, setRange, disabledDays, footer, footer2, setIsMultipleDay, onRadioBlur, handleMultipleDateChange, handleDateChange, handleDayBlur, handleContactChange, setContact, onContactValueChange, handleSubmitMessage, message, setMessage, sm, sr, isLoading } = props
  const { street1, street2, CityOrMunicipality } = props.location
  const { name, phone, email } = props.contact
    
  const autoFocus = useCallback(el => el ? el.focus() : null, [])

  useEffect(() => {
        if (slug.length > step) {
          setStep(slug.length)
        }

        if (slug.length === 1) {
            //resest the service
            selectedService(service)

        } else if (slug.length === 2) {

            //resest the service
            selectedService(service)  

            //set the address from url /service/serviceId/locationBase64
            const locationBase64String = slug[1]
            
            const jsonObject = base64StringToJsonObject(locationBase64String)

            setLocationValue(jsonObject)

        } else if (slug.length === 3) {

            //resest the service
            selectedService(service)  

            //set the address from url /service/serviceId/locationBase64
            const locationBase64String = slug[1]
            const jsonObject = base64StringToJsonObject(locationBase64String)
            setLocationValue(jsonObject)

            //update unit
            const unitCount = parseInt(slug[2])
            setUnitCount(unitCount)

        } else if (slug.length === 4) {
            //set the value of date

            //resest the service
            selectedService(service)  

            //set the address from url /service/serviceId/locationBase64
            const locationBase64String = slug[1]
            const jsonObject = base64StringToJsonObject(locationBase64String)
            setLocationValue(jsonObject)

            //update unit
            const unitCount = parseInt(slug[2])
            setUnitCount(unitCount)

            const base64Date = slug[3]
            const newDate = base64StringToJsonObject(base64Date)

            setDate(newDate)

            const newRange = { from: new Date(newDate.multiple.from), to: new Date(newDate.multiple.to) }
            setRange(newRange)
            
        } else if (slug.length === 5) {
            //set the value of date

            //resest the service
            selectedService(service)  

            //set the address from url /service/serviceId/locationBase64
            const locationBase64String = slug[1]
            const jsonObject = base64StringToJsonObject(locationBase64String)
            setLocationValue(jsonObject)

            //update unit
            const unitCount = parseInt(slug[2])
            setUnitCount(unitCount)

            const base64Date = slug[3]
            const newDate = base64StringToJsonObject(base64Date)

            setDate(newDate)

            const newRange = { from: new Date(newDate.multiple.from), to: new Date(newDate.multiple.to) }
            setRange(newRange)

            const base64Contact = slug[4]
            const newContact = base64StringToJsonObject(base64Contact)

            setContact(newContact)

            generateMessage()
            
        } else if (slug.length === 6) {
            //set the value of date

            //resest the service
            selectedService(service)  

            //set the address from url /service/serviceId/locationBase64
            const locationBase64String = slug[1]
            const newLocation = base64StringToJsonObject(locationBase64String)
            setLocationValue(newLocation)

            //update unit
            const unitCount = parseInt(slug[2])
            setUnitCount(unitCount)

            const base64Date = slug[3]
            const date = base64StringToJsonObject(base64Date)

            setDate(date)

            const newRange = { from: new Date(date.multiple.from), to: new Date(date.multiple.to) }
            setRange(newRange)

            const base64Contact = slug[4]
            const newContact = base64StringToJsonObject(base64Contact)

            setContact(newContact)
            
            generateMessage()
        }
  }, [])

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

    const selectedDate = new Date(newDate.single.date).toLocaleDateString("en-US", options)
    
    const renderDate = newDate.isMultiple === true ? `between the dates of ${beginDate} until ${endDate}. ` : `on ${selectedDate} `
    
    //const creator = process.env.NEXT_PUBLIC_CREATOR_NAME

    const updatedMessage = `Hi Rent A Cool Air Team,\n\n`+
                           `\xa0 \xa0 My Name is ${newContact.name} I would like to inquire about your ${service.name} package. I need ${unit} air cooler ` +
                           `${renderDate}` +
                           `at this location:\n${newLocation.street1} ${newLocation.street2} ${newLocation.CityOrMunicipality} ${newLocation.district} District\n` +
                           `\nPlease Contact me at: \n`+
                           `${newContact.phone}\n${newContact.email}\n\n`+
                           `Thank You and Have a Great Day!`
                           //`${creator}`

    setMessage(updatedMessage)
  }

  const renderCalendar = () => {
    
    if(date.isMultiple) {
        const d = date.multiple.to === new Date() && date.multiple.from === new Date() ? today : new Date(date.multiple.to)
        return (
            <div className={styles.calendarContainer} >
                <br />
                
                <DayPicker
                    mode="range"
                    defaultMonth={ d }
                    selected={range}
                    footer={footer}
                    onSelect={ handleMultipleDateChange }
                    fromYear={new Date(new Date().getFullYear())}
                    toYear={new Date(new Date().getFullYear() + 5 )}
                    pagedNavigation
                    disabled={disabledDays}
                    max={31}
                    onDayBlur={ () => handleDayBlur() }
                />
            </div>
        )
    } else {
        const d = date.single.date === new Date() ? new Date() : new Date(date.single.date)
        return (
            <div className={styles.calendarContainer} >
                <br />
                
                <DayPicker
                    mode="single"
                    defaultMonth={ d }
                    selected={ new Date(date.single.date) }
                    //footer={footer2}
                    onSelect={ handleDateChange }
                    fromYear={new Date(new Date().getFullYear())}
                    toYear={new Date(new Date().getFullYear() + 5 )}
                    disabled={disabledDays}
                    onDayBlur={ () => handleDayBlur() }
                />
            </div>
        )
    }
  }

  const renderServerMessage = () => {

       if (sr === "yes") {
            return (
                <div className={styles.serverResponse}>
                    <p> <CheckCircle /> {sm} </p>
                </div>
                
            )
       } else if (sr === "no") {
            return (
                <div className={styles.serverResponseNegative}>
                    <p> <AlertTriangle/> {sm} </p>
                </div>
            )
       } else {
           return (
               <></>
           )
       }
  }

  switch (step) {
      case 1:
          return (
                <StepForm
                    title={`Select Service ${service.name}`}
                    action="initial"
                    nextStep={ nextStep }
                    prevStep={ prevStep }
                    service={service}
                    selectedService={ selectedService }
                    slug={slug}
                >
                    <section className={styles.step1Content}>
                            <img src={service.thumbnail} alt={service.thumbnail} />
                    </section>

                </StepForm>
          )

      case 2:
          return (
              <StepForm
                title="Dropoff Location"
                action="next"
                nextStep={ nextStep }
                prevStep={ prevStep }
             >
                 <section>
                     <br />
                     <TextField 
                        value={street1}
                        icon={ <MapPin />}             
                        autoFocus={autoFocus}
                        placeholder="Street Address Line 1"
                        name="street1"
                        onChange={ handleLocationChange }
                        onLocationValueChange= {  onLocationValueChange }
                     />
                     <br />
                     <TextField 
                        value={street2}
                        icon={ <Home />}
                        placeholder="Apartment #, Floor # or Bldg. #"
                        name="street2"
                        onChange={ handleLocationChange }
                        onLocationValueChange= { onLocationValueChange }
                     />
                     <br />
                     <br />
                    
                    <br /><br />

                    <Select
                        icon={ <Flag /> }
                        options={areas}
                        value={CityOrMunicipality}
                        name="CityOrMunicipality"
                        id="CityOrMunicipality"
                        onChange={ handleLocationChange }
                        onLocationValueChange= { onLocationValueChange }
                    />
                    <br /><br />
                    { location.district === "" ? "" : `District: ${location.district}`}

                 </section>
             </StepForm>
          )
      case 3:
          return (
            <StepForm
                title="Number of Units"
                action="next"
                nextStep={ nextStep }
                prevStep={ prevStep }
            >
                
                <section className={styles.step3Content}>

                    <CircularButton
                        icon={ <Minus />}
                        onChange= { () => decreaseUnitCount() }
                        type="error"
                    />

                    {unitCount}

                    <CircularButton
                        icon={ <Plus />}
                        onChange= { () => increaseUnitCount() }
                        type="submit"
                    />

                </section>

                
            </StepForm>
          )
        case 4: 
            return (
                <StepForm
                title="Service Date"
                action="next"
                nextStep={ nextStep }
                prevStep={ prevStep }
                >
                    <section className={styles.step4Content}>

                        <br />

                        <input
                            type="radio"
                            id="singleday"
                            name="daterenderer"
                            value="single"
                            checked={!date.isMultiple}
                            onChange={ () => setIsMultipleDay(false) }
                            onBlur={ () => onRadioBlur() }
                        />
                        
                        <label htmlFor="singleday">Single Day</label>
                        
                        <input
                            type="radio"
                            id="multipleday"
                            name="daterenderer"
                            value="multiple"
                            checked={date.isMultiple}
                            onChange={ () => setIsMultipleDay(true) }
                            onBlur={ () => onRadioBlur() }
                        />
                        
                        <label htmlFor="multipleday">Multiple Days</label>
                        
                        { renderCalendar() }

                    </section>

                </StepForm>
            )
        case 5: 
            return (
                <StepForm
                title="Contact Person"
                action="next"
                nextStep={ nextStep }
                prevStep={ prevStep }
                >
                    <section>

                        <br />
                        <TextField2
                            value={name}
                            icon={ <User />}
                            placeholder="Name"
                            name="name"
                            onChange={ handleContactChange }
                            onContactValueChange= { onContactValueChange }
                        />
                        <br />
                        <TextField2
                            value={phone}
                            icon={ <Phone />}
                            placeholder="Phone Number"
                            name="phone"
                            onChange={ handleContactChange }
                            onContactValueChange= { onContactValueChange }
                        />
                        <br />
                        <TextField2 
                            value={email}
                            icon={ <AtSign />}
                            placeholder="Valid Email Address"
                            name="email"
                            onChange={ handleContactChange }
                            onContactValueChange= { onContactValueChange }
                        />
                    </section>
                
                </StepForm>
            )
        case 6:

            const isSent = sr === 'yes' ? true : false
            const b = isLoading === true ? 'Sending..' : <Send /> 
            return (
                <StepForm
                title="Send Message"
                action="submit"
                nextStep={ nextStep }
                prevStep={ prevStep }
                handleSubmitMessage={ handleSubmitMessage }
                isSent={ isSent }
                >
                    <section className={styles.step6} >
                        <br /><br /><br />
                        <div className={styles.messageContainer}>

                            <form name="FormMessage" onSubmit={ handleSubmitMessage }>

                                <section >
                                    {renderServerMessage()}
                                </section>
                                <br />

                                <TextArea 
                                    name="message"
                                    id="message"
                                    value={message}
                                    setValue={ setMessage }
                                />
                                
                                <button disabled={isSent}> { b } </button>

                            </form>
                        </div>
                        
                    </section>
                </StepForm>
            )
        case 7:
            return (
                <div>
                    123 
                </div>
            )
      default:
            return (
                <StepForm
                    title="Incorrect Entry"
                >
                    Error!

                </StepForm>
            )
  }
}


export default MultiStepInquiryForm