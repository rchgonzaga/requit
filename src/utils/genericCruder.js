import axios from 'axios'
import _ from 'lodash'
import setAuthorizationHeader from './setAuthorizationHeader'

export default class GenericCruder {

    BASEURL = 'http://192.168.0.18:3000/'

    constructor(...args){
        const zArg = args[0]
        
        if(_.get(zArg, 'endPoint')){
            this.BASEURL += _.get(zArg, 'endPoint')
        }

    }

    setToken(token){
        setAuthorizationHeader(token)
    }

    printCall(){
        console.log(this.BASEURL)
    }
    
}