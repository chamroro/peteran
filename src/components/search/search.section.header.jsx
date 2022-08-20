import Text from "../Text";

const SearchSectionHeader = ({headerText}) => {
  return (
    <div style={{display: 'flex', marginBottom: 22}}>
      <div style={{padding: '0 13px'}}>
        <Text n={'h6'} text={headerText} />
      </div>
      <div style={{flex: 1, borderBottom: 'solid 1px rgba(0, 0, 0, 0.3)'}}/>
    </div>
  )
}

export default SearchSectionHeader;