import Chart from 'chart.js/auto';
import {Bar} from "react-chartjs-2";

export default function Graprh({data})
{
    const max_loyer = Math.max(...data.map(appart => appart.loyer))
    const min_loyer = Math.min(...data.map(appart => appart.loyer))
    const total_loyer = data.reduce((acc, appart) => acc + appart.loyer, 0)

    const data_set = {
        labels: ['Total', 'Max', 'Min'],
        datasets: [
            {
                label: 'Loyer',
                data: [total_loyer, max_loyer, min_loyer],
                backgroundColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>Graphisme</h2>
                    <div className={'row mt-2'}>
                        <div className={'col-4'}>
                            <span className={'text-black badge badge-primary'}>Loyer total: {total_loyer}</span>
                        </div>
                        <div className={'col-4'}>
                            <span className={'text-black badge badge-primary'}>Loyer max: {max_loyer}</span>
                        </div>
                        <div className={'col-4'}>
                            <span className={'text-black badge badge-primary'}>Loyer min: {min_loyer}</span>
                        </div>
                    </div>
                    <div className={'row mt-1 border'}>
                        <div className={'col-8 d-flex flex-row justify-content-center align-items-center'}>
                            <Bar data={data_set} options={options}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}