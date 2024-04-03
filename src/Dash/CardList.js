import React from 'react';
import { faCalendar, faClipboardList, faComments, faDollar } from '@fortawesome/free-solid-svg-icons';
import { Card } from './Card';

/*cards datalist*/
export function CardList() {
    const cardData = [
        {
            title: "PATIENTS (MOIS)",
            price: "40 Personnes",
            colors: "primary",
            icon: faCalendar
        },
        {
            title: "PATIENTS (ANNUEL)",
            price: "500 Personnes",
            colors: "success",
            icon: faDollar
        },
        {
            title: "GUERISONS",
            price: "50%",
            colors: "info",
            icon: faClipboardList,
            isprogress: true
        },
        {
            title: "HOSPITALISATION EN COURS",
            price: "18",
            colors: "warning",
            icon: faComments
        }
    ];
    return (
        <div className='row'>
            {cardData.map((dt) => <Card data={dt} />)}
        </div>
    );
}