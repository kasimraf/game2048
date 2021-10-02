import React, {useEffect} from 'react'
import styles from './app.module.scss'

const App = () => {
    const initState = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    const [state, setState] = React.useState(initState);

    const randomize = () => {
        let count = Math.floor(Math.random() * 2) + 1
        let cloneState = state.slice()
        for (let i = 0; i < count; i++) {
            let x = Math.floor(Math.random() * 4)
            let y = Math.floor(Math.random() * 4)
            cloneState[x][y] = (Math.floor(Math.random() * 2) + 1) * 2
        }
        setState(cloneState);
    }

    useEffect(() => {
        randomize()
    }, []);

    return (
        <div className={styles.app}>
            <table>
                {state.map((item) => (
                    <tr>
                        {
                            Object.values(item).map((val) => {
                            if(val == 0){
                            return (
                            <td></td>
                            )
                        }
                            else  {
                            return (
                            <td>{val}</td>
                            )
                        }
                        })
                        }
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default App;