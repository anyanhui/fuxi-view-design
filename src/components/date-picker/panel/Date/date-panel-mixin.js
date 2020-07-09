
import { oneOf } from '../../../../utils/assist';
import {initTimeDate, initEndTimeDate } from '../../util';


export default {
    props: {
        showTime: {
            type: Boolean,
            default: false
        },
        format: {
            type: String,
            default: 'yyyy-MM-dd'
        },
        selectionMode: {
            type: String,
            validator (value) {
                return oneOf(value, ['year', 'month', 'date', 'time']);
            },
            default: 'date'
        },
        shortcuts: {
            type: Array,
            default: () => []
        },
        disabledDate: {
            type: Function,
            default: () => false
        },
        value: {
            type: Array,
            default: () => [initTimeDate(), initEndTimeDate()]
        },
        timePickerOptions: {
            default: () => ({}),
            type: Object,
        },
        showWeekNumbers: {
            type: Boolean,
            default: false
        },
        defaultTime: {
            type: Array,
            default: () => []
        },
        startDate: {
            type: Date
        },
        pickerType: {
            type: String,
            require: true
        },
        focusedDate: {
            type: Date,
            required: true,
        }
    },
    computed: {
        isTime(){
            return this.currentView === 'time';
        }
    },
    methods: {
        handleToggleTime(){
            this.currentView = this.currentView === 'time' ? 'date' : 'time';
        },
    }
};
