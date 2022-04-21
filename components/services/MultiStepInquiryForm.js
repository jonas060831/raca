import React, { useCallback } from 'react'

import { MapPin, Home, Flag } from 'react-feather'

//components
import StepForm from '../services/inquiry-form/StepForm'
import TextField from '../ui/TextField'


//styles
import styles from '../../styles/components/MultiStepInquiryForm.module.css'
import Select from '../ui/Select'



const MultiStepInquiryForm = ({ slug, step, service, nextStep, prevStep, selectedService, handleLocationChange, inputLocation, options }) => {
  
  const { street1, street2, CityOrMunicipality } = inputLocation
  //7 cases
  //button cases initial,next, submit

  const autoFocus = useCallback(el => el ? el.focus() : null, [])

  switch (step) {
      
      case 1:
          return (
                <StepForm
                    title={`Select ${service.name} ?`}
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
                     />
                     <br />
                     <TextField 
                        value={street2}
                        icon={ <Home />}
                        placeholder="Apartment # and Floor"
                        name="street2"
                        onChange={ handleLocationChange }
                     />
                     <br />
                     <br />
                    <label htmlFor={CityOrMunicipality}> City or Municipality:</label>
                    
                    <br /><br />

                    <Select
                        icon={ <Flag /> }
                        options={options}
                        value={CityOrMunicipality}
                        name="CityOrMunicipality"
                        id="CityOrMunicipality"
                        onChange={ handleLocationChange }
                    />

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

            </StepForm>
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