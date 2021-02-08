import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { DetailsPageLabel } from '../pages/enterprise-details/enterprise-details.styles'
import { MappedType } from '../services/enterprise.mapper'
import { Button } from './button.component'
import { Row } from './row.component'
import { ToggleButton } from './toggle-button.component'

interface FilterSelectorProps {
    initialValue?: number
    onApplyFilter: (id?: number) => void
    filters: MappedType[]
}

export const FilterSelector: React.FC<FilterSelectorProps> = (props) => {
    const { filters, onApplyFilter, initialValue } = props
    const [ isVisible, setVisible] = useState(false)
    const [ selected, setFilter] = useState(initialValue)

    useEffect(() => {
        setVisible(false)
    }, [filters])

    const selectFilter = (id?: number) => setFilter(id)
    
    return <Container>
        {isVisible &&
        <>
            <DetailsPageLabel>Por Categoria</DetailsPageLabel>
            <FilterOptionsContainer>
                {filters.map((filter, index) => (
                    <ToggleButton 
                        key={filter.name + index}
                        text={filter.name} 
                        onPress={() => selectFilter(filter.id)} 
                        isActive={filter.id==selected}/>
                ))}
            </FilterOptionsContainer>
            <Row>
                <Button text="Limpar" onPress={() => {
                    selectFilter()
                    onApplyFilter()
                }} fill secondary/>
                <Button text="Aplicar filtros" onPress={() => onApplyFilter(selected)} fill/>
            </Row>
            </>
        }
        <Row>
            <FilterOptionsButtonContainer onPress={() => setVisible(!isVisible)} disabled={!filters.length}>
                <FilterOptionsButtonText disabled={!filters.length}>{
                    isVisible ? "Ocultar filtros" : "Exibir filtros"
                }</FilterOptionsButtonText>
            </FilterOptionsButtonContainer>
        </Row>
    </Container>
}

const Container = styled.View`
    background-color: white;`

const FilterOptionsContainer = styled.View`
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px;
`

const FilterOptionsButtonContainer = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-color: gray;
    justify-content: center;
    height: 32px;
`

interface StyleProps {
    disabled?: boolean;
}

const FilterOptionsButtonText = styled.Text`
    color: ${({disabled}: StyleProps) => disabled ? "lightgray" : "black" };
`