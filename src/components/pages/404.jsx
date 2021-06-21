import React from 'react';
import PageContainer from '../PageContainer';
import { langTranslations } from '../Translations';

const Page404 = ({ lang }) => {
	const Translations = langTranslations(lang);
	return <PageContainer>
		<div className="container">
			<h1>
				<Translations page='404' translation='title' />
			</h1>
			<span>
				<Translations page='404' translation='desc' />
			</span>
		</div>
	</PageContainer>;
}

export default Page404;