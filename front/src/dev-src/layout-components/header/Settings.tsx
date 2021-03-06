import React from 'react';
import SelectFieldColor from './FieldColor';
import SelectFieldSize from './SelectFieldSize';
import SelectIcon from './SelectIcon';
import VolumeActions from './VolumeActions';

const Settings = () => {
    return (
        <React.Fragment>
            <VolumeActions />
            <SelectFieldColor />
            <hr />
            <SelectFieldSize />
            <hr />
            <SelectIcon />
        </React.Fragment>
    )
}

export default Settings;