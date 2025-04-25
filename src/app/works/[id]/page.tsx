import React from 'react';
import Link from 'next/link';

import works from '@/data/works.json';

import Image from 'next/image';

export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {    
    const id = (await params).id
    const work = works.find(work => work.id === id)!;

    return (
        <>

        <div className='page-container'>            
            <div className = 'work-container'>
                <div className = 'work-display'>
                    <Image src={work.src} alt={work.title} width={work.display.width} height={work.display.height}/>
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