import csc from 'country-state-city';
import { AeFormBuilder } from 'projects/ae-dynamic-form/src/public-api';

export const ADDRESS_FORM_CODE = `
new AeFormBuilder().title('Address Form')

    .newControl('street')
    .icon('my_location')
    .placeholder('Type street')
    .maxLength(40)
    .label('Street')
    .buildFormControl()

    .newControl('country')
    .type('select')
    .placeholder('Type country')
    .label('Country')
    .icon('flag')
    .options(csc.getAllCountries().map(c => ({ label: c.name, value: c.id })))
    .buildFormControl()

    .newControl('state')
    .type('select')
    .placeholder('Type state')
    .label('State')
    .icon('outlined_flag')
    .dynamicOptions({
        inputName: 'country',
        handler: (value) => csc.getStatesOfCountry(value).map(e => ({ label: e.name, value: e.id }))
    })
    .options(csc.getStatesOfCountry('231').map(s => ({ value: s.id, label: s.name })))
    .buildFormControl()

    .newControl('city')
    .type('select')
    .placeholder('Type city')
    .label('City')
    .icon('location_city')
    .dynamicOptions({
        inputName: 'state',
        handler: (value) => {
            const cities = csc.getCitiesOfState(value);
            return cities.map(c => ({ label: c.name, value: c.id }));
        }
    })
    .buildFormControl()


    .buildForm();
`;

export const ADDRESS_FORM = new AeFormBuilder().title('Address Form')

    .newControl('street')
    .icon('my_location')
    .placeholder('Type street')
    .maxLength(40)
    .label('Street')
    .buildFormControl()

    .newControl('country')
    .type('select')
    .placeholder('Type country')
    .label('Country')
    .icon('flag')
    .options(csc.getAllCountries().map(c => ({ label: c.name, value: c.id })))
    .buildFormControl()

    .newControl('state')
    .type('select')
    .placeholder('Type state')
    .label('State')
    .icon('outlined_flag')
    .dynamicOptions({
        inputName: 'country',
        handler: (value) => csc.getStatesOfCountry(value).map(e => ({ label: e.name, value: e.id }))
    })
    .options(csc.getStatesOfCountry('231').map(s => ({ value: s.id, label: s.name })))
    .buildFormControl()

    .newControl('city')
    .type('select')
    .placeholder('Type city')
    .label('City')
    .icon('location_city')
    .dynamicOptions({
        inputName: 'state',
        handler: (value) => {
            const cities = csc.getCitiesOfState(value);
            return cities.map(c => ({ label: c.name, value: c.id }));
        }
    })
    .buildFormControl()


    .buildForm();



