import React from 'react';
import Link from 'next/link';

import works from '@/data/works.json';

export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {    
    const id = (await params).id
    const work = works.find(work => work.id === id)!;

    return (
        <>
        <div className='breadcrumbs'>
            <Link href='/works'><p className='breadcrumb'>Works</p></Link>
            <p>&nbsp;/&nbsp;</p>
            <p>{work.year}</p>
            <p>&nbsp;/&nbsp;</p>
            <p>{work.season}</p>
        </div>

        <div className='page-container'>
            <hr className='breadcrumbs-divider'></hr>
            
            <div className = 'work-container'>
                <div className = 'work-display'>
                    <img src={work.src} alt={work.title}></img>
                </div>

                <div className = 'work-info'>
                    <h1 className='work-title'>{work.title}</h1>
                    <div className='work-details'>
                        <h3><b>{work.media.length === 1 ? (
                            <>{work.media[0]}</>
                        ) : (
                            <>{work.media.join(', ')}</>
                        )} on {work.surface}</b></h3>
                        <h3>{work.season} Collection, {work.year}</h3>
                        <h3>{work.x}x{work.y}</h3>
                    </div>
                </div>
            </div>
{/*             
            <div className='work-nav'>
                        {(pane !== 1 || position !== 1) ? (
                            <Link to={getLink(getPrev(work))}><ChevronLeftIcon fontSize='large'/> <h3>Prev</h3></Link>
                        ): <h3></h3>}
                        {(pane !== 3 || position !== 2) ? (
                            <Link to={getLink(getNext(work))}><h3>Next</h3><ChevronRightIcon fontSize='large'/></Link>
                        ): <></>}
            </div> */}
            {/*
            ok so we need to use the MUI pagination here eventually
            */}

        </div>
        </>
    );
};