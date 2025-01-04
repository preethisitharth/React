import './Myfile.css'
export var Travelsname=()=>
{
    const  cssfile={backgroundcolor:'yellow'}

    return(
        <>
        <table style={cssfile}>
           <thead >
            <tr>
                <th>Travelsname</th>
                <th>Route</th>
                <th>price</th>
                <th>Bustype</th>
            </tr>
           </thead>
           <tbody>
            <tr>
                <td>SRT</td>
                <td>salem to chennai</td>
                <td>500</td>
                <td>SLEEPER AC</td>

            </tr>
            <tr>
                <td>SwamyAyyappa</td>
                <td>COimbatore to Chennai</td>
                <td>800</td>
                <td>VOLVO AC SLEEPER</td>

            </tr>
            <tr>
                <td>SRL</td>
                <td>Salem to Thiruvarur</td>
                <td>900</td>
                <td>AC SLEEPER</td>
            </tr>
            <tr>
               <td>CITY</td>
               <td>Bangalore TO Chennai</td>
               <td>1500</td>
               <td>Volvo 9600S SLEEPER</td>
            </tr>
            </tbody>
        </table>
        </>
    )
}