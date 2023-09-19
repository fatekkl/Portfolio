import './DarkMode.css'


function DarkMode () {
    return (
        <div>
        <input className='inputdark' type='checkbox' id='checkbox'/>
        <label class="label" for="checkbox">
        <i class="moon" src="./assets/lua.png" ></i>
        <i class="sun" src="./assets/sol.png" ></i>
        <div class="ball"></div>
      </label>
        </div>

    )
}


export default DarkMode