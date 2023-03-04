
export default function Burger() {
    return (
        <div>
            <div className="icons"  style={{ userSelect: 'none' }}>
                <svg width={50} height={50} viewBox="0 0 36 22" xmlns="http://www.w3.org/2000/svg" onClick={(event) => event.currentTarget.classList.toggle('active')}>
                    <g transform="matrix(1,0,0,1,-419.5,-274.131)">
                        <g id="arrow_rocket">
                            <path id="top" d="M420,274.631L450,274.631C450,274.631 459.044,284.599 450,284.599C440.956,284.599 420,284.646 420,284.646L430.014,274.631" />
                            <g transform="matrix(1,-1.22465e-16,-1.22465e-16,-1,0,569.277)">
                                <path id="bottom" d="M420,274.631L450,274.631C450,274.631 459.044,284.599 450,284.599C440.956,284.599 420,284.646 420,284.646L430.014,274.631" />
                            </g>
                            <g transform="matrix(1,0,0,1,0,-0.0234189)">
                                <path id="middle" d="M420,284.646L450,284.646" />
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
}
