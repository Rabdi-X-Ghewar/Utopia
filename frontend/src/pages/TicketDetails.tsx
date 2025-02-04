import React from "react";
import { useParams } from "react-router-dom";

const TicketDetails: React.FC = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Ticket Details</h1>
            <p>Details for Ticket ID: {id}</p>
        </div>
    );
};

export default TicketDetails;
