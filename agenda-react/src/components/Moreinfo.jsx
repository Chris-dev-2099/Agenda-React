import React from 'react';
import useUser from '../hooks/useUser';

export default function MoreInfo() {
    const {name, years} = useUser();
    return (
      <div>
        <spam> Dueños:  {name}</spam>  
      </div>
    );
}