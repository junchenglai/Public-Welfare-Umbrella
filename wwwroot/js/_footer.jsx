/// <reference path="_references.js" />

let config = $.getJSON({
    url: '../json/config.json',
    async: false
}).responseJSON;

//声明渲染
if (document.getElementById("_statement")) {
    console.log(config.statement)
    ReactDOM.render(
        <pre className="page__desc">{config.statement}</pre>,
        document.getElementById("_statement")
    );
}

//底部分割线
if (document.getElementById("_loadmore_dot")) {
    ReactDOM.render(
        <div className="weui-loadmore weui-loadmore_line weui-loadmore_dot">
            <span className="weui-loadmore__tips" style={{ backgroundColor: '#F8F8F8' }} />
        </div>,
        document.getElementById("_loadmore_dot")
    );
}

//底部文档渲染
let text = () => {
    let res = [];
    for (let i = 0; i < config.footer.footer_text.length; i++) {
        res.push(<div className="weui-footer__text">
            {config.footer.footer_text[i].text}
        </div>)
    }
    return res;
}
//底部链接渲染
let link = () => {
    let res = [];
    for (let i = 0; i < config.footer.footer_link.length; i++) {
        res.push(
            <a href={config.footer.footer_link[i].href} className="weui-footer__link" key={i}>
                {(() => {
                    if (config.footer.footer_link[i].text)
                        return <p>{config.footer.footer_link[i].text}</p>
                }).call(this)}
                {(() => {
                    if (config.footer.footer_link[i].img)
                        return <img src={config.footer.footer_link[i].img.href} width={config.footer.footer_link[i].img.width} />
                }).call(this)}
            </a>)
    }
    return res;
}
//底部内容
if (document.getElementById("_footer")) {
    ReactDOM.render(
        <div className="weui-footer">
            <div className="weui-footer__text">
                <p>© 2016 - {(new Date).getFullYear()} 赖俊成。 All rights reserved.</p>
            </div>

            <div className="weui-footer__links">
                <p className="weui-footer__link">ver {config.version}</p>
                <a href="http://www.miitbeian.gov.cn" className="weui-footer__link">粤ICP备16009695号</a>
            </div>

            <div className="weui-footer__links "><p className="weui-footer__link">友情链接：</p>{link()}</div>

            <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="知识共享许可协议" style={{ borderWidth: 0 }} src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>
        </div>,
        document.getElementById('_footer')
    );
}


function Ele(props) {
    return
    <div>{props.content}</div>
    //<div id="loadingToast" style={{ display: 'none' }}>
    //    <div className="weui-mask_transparent" />
    //    <div className="weui-toast">
    //        <i className="weui-loading weui-icon_toast"></i>
    //        <p className="weui-toast__content">{props.content}</p>
    //    </div>
    //</div>
}
//加载弹窗
if (document.getElementById('_loadingToast')) {
    
    let content = $("#_loadingToast").attr("content");
    const element = <Ele content={content} />
    console.log(element);
    ReactDOM.render(element, document.getElementById('_loadingToast'));
}