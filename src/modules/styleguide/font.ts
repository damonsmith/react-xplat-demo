import { fontFace } from 'typestyle'

export const embedFonts = () => {
	fontFace({
		fontFamily: 'Work Sans',
		fontStyle: 'normal',
		fontWeight: 400,
		src: 'local("Work Sans"), local("WorkSans-Regular"), url(https://fonts.gstatic.com/s/worksans/v3/WB2LNay3rHMH1zU8UJnUHBJtnKITppOI_IvcXXDNrsc.woff2) format("woff2")',
		unicodeRange: ' U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF'
	})

	fontFace({
		fontFamily: 'Work Sans',
		fontStyle: 'normal',
		fontWeight: 400,
		src: 'local("Work Sans"), local("WorkSans-Regular"), url(https://fonts.gstatic.com/s/worksans/v3/ElUAY9q6T0Ayx4zWzW63VFtXRa8TVwTICgirnJhmVJw.woff2) format("woff2")',
		unicodeRange: ' U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215'
	})

	fontFace({
		fontFamily: 'Work Sans',
		fontStyle: 'normal',
		fontWeight: 200,
		src: 'local("Work Sans ExtraLight"), local("WorkSans-ExtraLight"), url(https://fonts.gstatic.com/s/worksans/v3/u_mYNr_qYP37m7vgvmIYZz0LW-43aMEzIO6XUTLjad8.woff2) format("woff2")',
		unicodeRange: ' U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF'
	})

	fontFace({
		fontFamily: 'Work Sans',
		fontStyle: 'normal',
		fontWeight: 200,
		src: 'local("Work Sans ExtraLight"), local("WorkSans-ExtraLight"), url(https://fonts.gstatic.com/s/worksans/v3/u_mYNr_qYP37m7vgvmIYZ-gdm0LZdjqr5-oayXSOefg.woff2) format("woff2")',
		unicodeRange: ' U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215'
	})
}
