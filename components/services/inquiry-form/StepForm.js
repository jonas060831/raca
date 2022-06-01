import React from 'react'
import { useRouter } from 'next/router'
import { X, Check, ArrowLeft, ArrowRight, Send } from 'react-feather'

//components
import Button from '../../ui/Button'

//styles
import styles from '../../../styles/components/StepForm.module.css'
const StepForm = (props) => {

  const { title, action, nextStep, prevStep, handleSubmitMessage, isSent } = props

  const router = useRouter()
  
  const renderAction = () => {
      switch (action) {
          case 'initial':
              return (
                   <div>
                      <Button
                        title="No"
                        type="main"
                        icon={<X/>}
                        iconRight={false}
                        handleClick={ () => router.push('/services') }
                      />
                      &nbsp;&nbsp;
                      <Button
                        title="Yes"
                        type="main"
                        icon={<Check/>}
                        iconRight={false}
                        handleClick={ () => {
                            nextStep()
                        }}
                      />
                   </div> 
              )
          case 'next':
              return (
                    <div>
                        <Button
                        title="prev"
                        type="main"
                        icon={<ArrowLeft />}
                        handleClick={ prevStep }
                        />
                        &nbsp;&nbsp;
                        <Button
                        title="next"
                        type="main"
                        icon={<ArrowRight />}
                        iconRight={true}
                        handleClick={ nextStep }
                        />
                    </div> 
             )
          case 'submit':
              return (
                    <div>
                        <div className="notice-warning">
                            <p>
                            Rent a CoolAir typically replies within 12 hours. If you do not see a reply on your inbox, please check your junk mail or spam folder. 
                            </p>
                        </div>

                        <Button
                        title="Previous"
                        type="main"
                        icon={<ArrowLeft />}
                        handleClick={ prevStep }
                        />
                        &nbsp;&nbsp;
                        <Button
                        title="Submit"
                        type="main"
                        icon={<Send />}
                        iconRight={true}
                        handleClick={ handleSubmitMessage }
                        isSent={ isSent }
                        />
                    </div> 
              )
         default:
              return <></>
      }
  }

  return (
    <div>
        <section className={styles.title}>
            {title}
        </section>
        <hr />
        <section className={styles.content} >
            
            {props.children}

        </section>
        <hr />
        <section className={styles.action} >
            { renderAction() }
        </section>

    </div>
  )
}


export default StepForm