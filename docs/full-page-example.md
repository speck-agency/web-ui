Example of one full page. This whole styleguide uses prebuilt default css that can be found in /build/css.

```jsx
// Mocked NavLink. Should be imported from react-router-dom in the real app.
const NavLink = props => <a href={props.to} {...props} />;

<Page style={{ width: '100%', height: '600px' }}>
  <PageHeader>
    <PageHeaderLeft numItems={2}>
      {/* SideNav toggler */}
      <PageHeaderLink
        linkProps={{
          href: '#',
          onClick: e => { e.preventDefault(); console.log('SideNav toggled') }
        }}
        iconName="menu"
      />
      {/* Normal internal link */}
      <PageHeaderLink
        linkComponent={NavLink}
        linkProps={{
          to: '/servers',
        }}
        text="Servers"
      />
    </PageHeaderLeft>
    <PageHeaderRight numItems={1}>
      {/* External link with icon */}
      <PageHeaderLink
        linkProps={{
          href: 'http://www.google.com',
          target: '_blank',
        }}
        iconName="power_settings_new"
        text="Logout"
      />
    </PageHeaderRight>
  </PageHeader>
  <PageBody>
    <SideNav expanded={false}>
      <SideNavSection>
        <SideNavHeading>SideNavHeading1</SideNavHeading>
        <SideNavLink>SideNavLink1</SideNavLink>
      </SideNavSection>
      <SideNavHeading>SideNavHeading2</SideNavHeading>
      <SideNavLink>SideNavLink2</SideNavLink>
    </SideNav>
    <ContentCanvas>
      <Main>
        <MainHeader>
          <MainTitle>MainTitle</MainTitle>
        </MainHeader>
        <MainBody>
          <Table>
            <Thead>
              <Tr>
                <Th>Th1</Th>
                <Th>Th2</Th>
                <Th>Th3</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr hover>
                <Td>
                  <Toggle checked />
                </Td>
                <Td>
                  <InputCheckbox />
                </Td>
                <Td>
                  <InputRadio />
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Detail>
            <DetailHeader>
              <DetailHeaderLeft>
                <DetailTitle>DetailTitle</DetailTitle>
              </DetailHeaderLeft>
              <DetailHeaderRight>
                <Icon name="trash" />
                <Icon name="clear" />
              </DetailHeaderRight>
            </DetailHeader>
            <DetailBody>DetailBody</DetailBody>
            <DetailFooter>DetailFooter</DetailFooter>
          </Detail>
        </MainBody>
        <MainFooter>
          <PaginationGroup
            paginationLimit={<PaginationLimit />}
            paginationOffset={<PaginationOffset />}
          />
        </MainFooter>
      </Main>
    </ContentCanvas>
  </PageBody>
</Page>
```