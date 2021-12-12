import React, { useState } from 'react'

export const FormContext = React.createContext({})

export const FormProvider = props => {
    const [curriculoInfoBasica,setCurriculoInfoBasica] = useState({
        nome: '',
        profissao: '',
        resumo: '',
        telefone: '',
        email: '',
        linkedin: '',
        github: ''
    })

    const [localizacao,setLocalizacao] = useState({
        pais: '',
        uf: '',
        cidade: ''
    })

    const [experiencias,setExperiencias] = useState({
        nomeDaEmpresa: '',
        cargo: '',
        anoComeco: '',
        anoFim: ''
    })

    const [formacoes,setFormacoes] = useState({
        instituicao: '',
        curso: '',
        anoInicio: '',
        anoFim: ''
    })

    const [competencias,setCompetencias] = useState({
        competencia: '',
        descricao: '',
    })

    return(
        <FormContext.Provider value={{
            curriculoInfoBasica, setCurriculoInfoBasica,
            localizacao,setLocalizacao,
            experiencias,setExperiencias,
            formacoes,setFormacoes,
            competencias, setCompetencias
        }}>
            {props.children}
        </FormContext.Provider>
    )
}
