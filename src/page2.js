

function Page2({ value }) {
  return (
    <>
      <div className='image'>
        <img src='./images/illustration-thank-you.svg' alt=''></img>
      </div>
      <div className='page'>
        <h5 className='btntext'>{`You selected ${value} out of 5`}</h5>
        <h3> Thank you!</h3>
        <p> We appreciate you taking the time to give a rating. If you ever need more support,
          dont hesitate to get in touch!</p>
      </div>
    </>
  )
}

export default Page2