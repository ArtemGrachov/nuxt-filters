import { Store } from 'vuex';

export interface IStoreFormMapperOptions {
    store: Store<any>;
    getter: string;
    action: string;
    fields: string[];
}

export default function({ store, getter, action, fields }: IStoreFormMapperOptions): {} {
    const obj = {};

    fields.forEach((field: string) => {
        Object.defineProperty(
            obj,
            field,
            {
                get: function() {
                    return store.getters[getter][field];
                },
                set: function(value) {
                    if (store.getters[getter][field] === value) {
                        return;
                    }

                    store.dispatch(
                        action,
                        {
                            field,
                            value
                        }
                    );
                }
            }
        );
    });

    return obj;
}
