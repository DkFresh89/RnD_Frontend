
function Answers ({incorrect_answers, correct_answer}) {
    // debugger
    console.log(incorrect_answers)
    
    const answers = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5).map(answers =>{
       return <li>{answers.replace(/&#039;/g, "'").replace(/&quot;/g, `"`).replace(/&ldquo;/g, `"`).replace(/&rsquo;/g, "'").replace(/&rdquo;/g, `"`).replace(/&shy;/g, "-").replace(/&hellip;/g, "...").replace(/&Aring;/g, "Å").replace(/&oacute;s/g, "ó")}</li>
    })
    // debugger
// ----------- DOM ----------- //  
    return (
    <div className="answers">
        <h1>Answers</h1>
        <ul>{answers}</ul>
    </div>
    )
}

export default Answers