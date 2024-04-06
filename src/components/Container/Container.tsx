import './container.css';

export function Container({flex, children}: {flex?: boolean; children: React.ReactNode;}) {
  return (
    <div className='container' style={flex ? {display: 'flex'}: {}}>
      {children}
    </div>
  );
}
